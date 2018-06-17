import { ContentsModule } from './contents.module';

describe('ContentsModule', () => {
  let contentsModule: ContentsModule;

  beforeEach(() => {
    contentsModule = new ContentsModule();
  });

  it('should create an instance', () => {
    expect(contentsModule).toBeTruthy();
  });
});
