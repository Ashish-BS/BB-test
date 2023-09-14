import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const ReturnToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.pageYOffset > 50) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {isVisible && (
                <div className={`b-return-to-top`} onClick={scrollToTop}>
                    <div className={`font-awesome-div`}>
                        <FontAwesomeIcon
                            icon={faChevronUp}
                            className={`b-return-to-top-icon`}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default ReturnToTop;
