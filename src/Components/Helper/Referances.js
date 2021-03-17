class Referances {

    executeScroll = (refrance) => {
        refrance.current.scrollIntoView({
            behavior: "smooth"
        });
    }

}

export default new Referances();