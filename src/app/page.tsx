import DeviBirthdayCountdown from "./components/DeviBirthdayCountdown";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'დევიკოს დაბადების დღე',
    description: 'ოფიციალური საიტი დევიკოს დაბადებისდღის.',
};

export default function Home() {
    return <DeviBirthdayCountdown/>;
}
