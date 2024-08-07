import { Metadata } from "next";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import Alert from "@/app/_components/alert";
import Container from "@/app/_components/container";
import Footer from "@/app/_components/footer";
import { BlogPost } from "./BlogPost";

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return null
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <>
      <main>
        <Alert preview={post.preview} />
        <Container>
          <Suspense fallback="loading..."><BlogPost author={author} content={content}
            coverImage={coverImage} markdownStyles={markdownStyles} title={title} />
            </Suspense>
        </Container>

      </main>
      <Footer /></>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {}
  }

  const title = `${post.title} | Next.js Blog Example with ${CMS_NAME}`;

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
