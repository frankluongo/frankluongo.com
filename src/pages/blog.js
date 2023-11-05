import * as React from "react";
import Seo from "#lib/Seo/Seo";
import BlogRoute from "#routes/BlogRoute/BlogRoute";
const BlogPage = () => <BlogRoute />;
export const Head = () => <Seo title="My Blog" description={``} />;
export default BlogPage;
