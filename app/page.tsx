import Link from "next/link";

export default function Home() {
    return (
        <>
            <Link href="/apple">🍎Apple</Link>
            <Link href="/banana">🍌Banana</Link>
            <Link href="/kiwi">🥝Kiwi</Link>
        </>
    );
}
