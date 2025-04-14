import { useEffect, useRef } from "react";

export const RevealOnScroll = ({ children }) => {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    element.classList.add("visible");
                } else {
                    element.classList.remove("visible");
                }
            },
            { threshold: 0.1, rootMargin: "0px 0px -5px 0px" }
        );

        observer.observe(element);

        // Clean up OBSERVER from the specific element
        return () => {
            if (element) observer.unobserve(element);
            observer.disconnect();
        };
    }, []);

    return (
        <div ref={ref} className="reveal">
            {children}
        </div>
    );
};
