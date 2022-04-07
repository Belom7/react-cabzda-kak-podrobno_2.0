import React from "react";

type StarPropsType = {
    selected: boolean
}

export const UnControlledStar = (props: StarPropsType) => {

    return props.selected? <><b>star</b> </>: <>star </>
}