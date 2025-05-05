import { CodeBlock } from "@/lib/code/code";
import { PostHeading1, PostHeading2, PostHeading3, PostHeading4, PostHeading5, PostHeading6 } from "@/lib/posts/headings";
import { PostIframe } from "@/lib/posts/iframe";
import { PostImage } from "@/lib/posts/image";
import { PostList } from "@/lib/posts/list";
import { PostParagraph } from "@/lib/posts/paragraph";
import { PostTable } from "@/lib/posts/table";

const types = [
    { name: 'h1', path: PostHeading1 },
    { name: 'h2', path: PostHeading2 },
    { name: 'h3', path: PostHeading3 },
    { name: 'h4', path: PostHeading4 },
    { name: 'h5', path: PostHeading5 },
    { name: 'h6', path: PostHeading6 },
    { name: 'p', path: PostParagraph },
    { name: 'image', path: PostImage },
    { name: 'ul', path: PostList },
    { name: 'code', path: CodeBlock },
    { name: 'iframe', path: PostIframe },
    { name: 'table', path: PostTable },
]

export const Post = ({
    type,
    text,
    ...prop
}) => {
    return types.map((t, k) => {
        if (t.name == type) {
            return t.path({text: text, ...prop}, k);
        }
    })
}