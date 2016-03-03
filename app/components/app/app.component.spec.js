import {AppComponent} from './app.component';

describe("The app", () => {

  let app = new AppComponent();

  it("contains a variable asdf with the value 1234", function() {
    expect(app.asdf).toBe(1234);
  });
});
