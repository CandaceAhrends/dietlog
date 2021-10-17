import React from "react";
import { shallow } from "enzyme";
import ImageCard from "./ImageCard";

it("should create an imagee", () => {
  const component = shallow(<ImageCard />);
  const img = component.find("img");

  expect(img).toBeDefined();
});
