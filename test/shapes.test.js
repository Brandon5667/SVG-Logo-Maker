
describe('Validate', () => {
    describe('Password Length', ()=> {
      it("returns false when the password is less than 8 characters", ()=>{
        const validate = new Validate();
        const password = validate.isPassword('cdfghjnh')
        expect(password).toEqual(false);
      });