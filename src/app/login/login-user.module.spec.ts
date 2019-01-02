import { LoginUserModule } from './login-user.module';

describe('LoginUserModule', () => {
  let loginUserModule: LoginUserModule;

  beforeEach(() => {
    loginUserModule = new LoginUserModule();
  });

  it('should create an instance', () => {
    expect(loginUserModule).toBeTruthy();
  });
});
