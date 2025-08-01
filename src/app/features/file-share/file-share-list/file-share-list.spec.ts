// Test: FileShareListComponent
import { FileShareListComponent } from './file-share-list';
import { FileShareService } from '../../../core/services/file-share.service';

describe('FileShareListComponent', () => {
  let component: FileShareListComponent;
  let fileShareServiceSpy: jasmine.SpyObj<FileShareService>;

  beforeEach(() => {
    fileShareServiceSpy = jasmine.createSpyObj('FileShareService', ['uploadFile', 'listFiles']);
    component = new FileShareListComponent();
    (component as any).fileShareService = fileShareServiceSpy;
    component.uid = 'demo-user';
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load files', async () => {
    fileShareServiceSpy.listFiles.and.resolveTo(['file1.pdf', 'file2.docx']);
    await component.loadFiles();
    expect(component.files()).toEqual(['file1.pdf', 'file2.docx']);
    expect(component.error()).toBeNull();
  });

  it('should handle error on file load', async () => {
    fileShareServiceSpy.listFiles.and.rejectWith(new Error('Network error'));
    await component.loadFiles();
    expect(component.error()).toContain('Dosyalar yüklenemedi');
  });

  it('should upload file', async () => {
    const fakeFile = new File(['content'], 'test.txt');
    fileShareServiceSpy.uploadFile.and.resolveTo(undefined);
    spyOn(component, 'loadFiles');
    const event = { target: { files: [fakeFile] } } as any;
    await component.upload(event);
    expect(fileShareServiceSpy.uploadFile).toHaveBeenCalledWith(fakeFile, 'demo-user');
    expect(component.loadFiles).toHaveBeenCalled();
    expect(component.error()).toBeNull();
  });

  it('should handle error on upload', async () => {
    const fakeFile = new File(['content'], 'test.txt');
    fileShareServiceSpy.uploadFile.and.rejectWith(new Error('Upload error'));
    const event = { target: { files: [fakeFile] } } as any;
    await component.upload(event);
    expect(component.error()).toContain('Dosya yüklenemedi');
  });
});
