const expect = require("chai").expect;
const { getTitle, getBody, getTitleAndBody } = require("../src/main");

const id = 10;

describe("getTitle", async () => {
  it("should display title from posts for a given id", async () => {
    const expected = "optio molestias id quia eum";
    const actual = await getTitle(10);
    expect(actual).to.eql(expected);
  });
});

describe("getBody", async () => {
  it("should display body of comments for a given id", async () => {
    const expected =
      "voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis";
    const actual = await getBody(10);
    expect(actual).to.eql(expected);
  });
});

// describe("getBody2", async () => {
//   it("should display body of comments for a given id", async () => {
//     const expected =
//       "voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis";
//     const actual = await getBody2(10);
//     expect(actual).to.eql(expected);
//   });
// });

describe("getTitleAndBody", async () => {
  it("should display title of posts and body of comments for a given id", async () => {
    const title = "optio molestias id quia eum";
    const body =
      "voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis";
    const expected = `Title: ${title} \nBody: ${body}`;
    const actual = await getTitleAndBody(10);
    expect(actual).to.eql(expected);
  });
});
