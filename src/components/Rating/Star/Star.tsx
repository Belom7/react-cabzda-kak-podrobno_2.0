import React from "react";

type PropsStarType = {
    selected: boolean
}

export const Star = (props: PropsStarType) => {
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