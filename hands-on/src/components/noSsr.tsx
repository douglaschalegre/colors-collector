import dynamic from 'next/dynamic';
import React from 'react';
const NonSSRWrapper = (props: {
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}) => <React.Fragment>{props.children}</React.Fragment>;
export default dynamic(() => Promise.resolve(NonSSRWrapper), {
  ssr: false,
});
