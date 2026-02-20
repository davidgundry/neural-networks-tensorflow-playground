/* 
 * These declarations allow import statements to be written
 * for the filetypes listed below without error. To be correctly
 * imported (as filename string) and be included in the output
 * these filetypes also need to be properly configured in Webpack.
 */

declare module '*.svg';
declare module '*.png';
declare module '*.gif';
declare module '*.jpg';
declare module '*.json';
declare module '*.woff';
declare module '*.woff2';

declare module '*.css' {
    const content: { [className: string]: string };
    export default content;
}

declare module 'react-mathjax2'

declare module 'react-prefixer' {
    export default prefix = (css: React.CSSProperties) => React.CSSProperties
}

declare module "*.inline.svg" {
    const content: any;
    export default content;
  }