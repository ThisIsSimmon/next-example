import Link from "next/link";

export default function Kiwi() {
    return (
        <>
            <p>→🍎Apple</p>
            <Link href="/banana">🍌Banana</Link>
            <Link href="/kiwi">🥝Kiwi</Link>
        </>
    );
}
