import Link from "next/link";

export default function Kiwi() {
    return (
        <>
            <Link href="/apple">🍎Apple</Link>
            <p>→🍌Banana</p>
            <Link href="/kiwi">🥝Kiwi</Link>
        </>
    );
}
