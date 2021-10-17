import React from "react";
import renderer from "react-test-renderer";
import NewsFeed from "./NewsFeed";
describe("show newsfeed", () => {
  test("should render Vrushali", () => {
    const component = renderer.create(<NewsFeed></NewsFeed>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
