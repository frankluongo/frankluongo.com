import * as React from "react";
import { Seo } from "#base/Seo";
import BlogSlice from "#v6/components/slices/BlogSlice/BlogSlice";
const BlogPage = () => <BlogSlice />;
export const Head = () => <Seo title="My Blog" description={``} />;
export default BlogPage;
