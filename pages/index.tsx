import { withLayout } from "layout/Layout";
import React from "react";

function Home(): JSX.Element {
  return (
    <>
      <p>hello from home</p>
    </>
  );
}

export default withLayout(Home);
