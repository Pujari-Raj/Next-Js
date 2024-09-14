import React from "react";

const docs = ({
  params,
}: {
  params: {
    slug: string[];
  };
}) => {
  {
    if (params.slug?.length === 2) {
      return (
        <h1>
          Viewing docs for feature {params.slug[0]} and concept {params.slug[1]}
        </h1>
      );
    } else if (params.slug?.length === 1) {
      return (
        <h2>
          Viewing docs for feature: {params.slug[0]} 
        </h2>
      );
    }
  }
  return <div>docs page</div>;
};

export default docs;
