import React from "react";
import Page404Error from "../../containers/Page404Error";
import renderer from "react-test-renderer";
import matchMedia from "../../matchMedia.mock";

it("should display 404 error", () => {
  const tree = renderer.create(<Page404Error />);
  expect(tree).toMatchSnapshot();
});
