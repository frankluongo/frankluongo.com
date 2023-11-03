import * as React from "react";
import { Seo } from "#base/Seo";
import HomeSlice from "#v6/components/slices/HomeSlice/HomeSlice";
const TITLE = "Home";
const Homepage = () => <HomeSlice />;
export default Homepage;
export const Head = () => <Seo title={TITLE} />;
