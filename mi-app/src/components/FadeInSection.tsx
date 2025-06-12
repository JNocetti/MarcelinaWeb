import type {ReactNode} from "react";

interface FadeInSectionProps {
    children: ReactNode;
    animation?: string;
    delay?: number;
    duration?: number;
}

const FadeInSection = ({
                           children,
                           animation = 'fade-up',
                           delay = 0,
                           duration = 550,
                       }: FadeInSectionProps) => {
    return (
        <div
            data-aos={animation}
            data-aos-delay={delay}
            data-aos-duration={duration}
        >
            {children}
        </div>
    );
};

export default FadeInSection;
