import { GetStaticProps, GetStaticPaths } from "next";
import Link from 'next/link';

export const getStaticProps = async (ctx) => {
    const res = await fetch('https://dog.ceo/api/breeds/image/random');
    const obj = await res.json()
    return {
        props: {
            slug: ctx.params.slug,
            builtAt: Date.now(),
            imgPath: obj.message
        },
        unstable_revalidate: 30,
    };
};

export const getStaticPaths = async () => {
    return {
        paths: ["/foo"],
        fallback: true,
    };
};

export default (props) => {
  return (
    <>
      {props.slug}: {props.builtAt}
      <img src={props.imgPath} />
      <Link href="/">indexに行くよ</Link>
    </>
  );
};