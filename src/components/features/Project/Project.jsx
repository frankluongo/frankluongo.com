import React from "react";
import { Card } from "#base/Card/Card";
import { Column } from "#base/Column/Column";
import { convertTags } from "#base/TagsList/convertTags";
import { Image } from "#base/Image/Image";
import { TagsList } from "#base/TagsList/TagsList";

import * as css from "./Project.module.css";

export const Project = (props) => {
  const {
    active,
    childMarkdownRemark,
    id,
    previewImage,
    projectTags,
    setActive,
    thumbnailImage,
    title,
  } = props;

  const isActive = active === id;

  const dynamicAttributes = {
    "aria-current": isActive ? true : null,
  };
  const headingSize = isActive ? "h3" : "h4";

  return (
    <Column
      colSpan={{ default: 12, md: isActive ? 8 : 3 }}
      extraClasses={css.ProjectColumn}
      role="button"
      tabIndex={0}
      onClick={clickHandler}
      {...dynamicAttributes}
    >
      <Card extraClasses={css.ProjectCard}>
        <div className={css.Content}>
          <aside className={css.Aside}>
            <figure>
              <Image alt={title} path={previewImage} />
            </figure>
            {isActive && (
              <>
                <h2 className="h4">Tags</h2>
                <TagsList items={convertTags(projectTags, "name")} />
                <div>
                  <figure className={css.Thumbnail}>
                    <Image alt={title} path={thumbnailImage} />
                  </figure>
                </div>
              </>
            )}
          </aside>
          <section className={css.Text}>
            <h2 className={headingSize}>{title}</h2>
            {isActive && (
              <div
                className={css.Description}
                dangerouslySetInnerHTML={{ __html: childMarkdownRemark.html }}
              />
            )}
          </section>
        </div>
      </Card>
    </Column>
  );

  function clickHandler() {
    isActive ? setActive(null) : setActive(id);
  }
};
