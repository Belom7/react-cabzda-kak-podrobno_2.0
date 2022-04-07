import React from "react";

type StarPropsType = {
    selected: boolean
}

export const UnControlledStar = (props: StarPropsType) => {

    if (props.selected === false) {
        return (
            <>star </>
        )
    } else {
        return (
            <><b>star</b> </>
        )
    }
}