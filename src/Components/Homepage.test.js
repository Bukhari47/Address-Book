import React from "react";
import UsersCard from "../Components/UsersCard";
import renderer from "react-test-renderer";

it("Should display User Card", () => {
  const user = [
    {
      login: {
        uuid: "",
      },
      picture: {
        thumbnail: {},
      },
      name: {
        title: "",
        first: "",
        last: "",
      },
    },
  ];
  const tree = renderer
    .create(
      <div>
        <UsersCard user={user[0]} />
      </div>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("Should be true", () => {
  const foo = true;
  expect(foo).toEqual(true);
});
