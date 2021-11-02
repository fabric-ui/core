import React, {useMemo} from "react";

export default function useForm({data, changed, dependencies}) {

    return useMemo(() => {
        let response = dependencies === undefined || !changed
        let i
        if (dependencies !== undefined && changed)
            for (i = 0; i < dependencies.length; i++)
                if (dependencies[i] !== undefined && dependencies[i] !== null)
                    response = (
                        response ||
                        data[dependencies[i].key] === null ||
                        data[dependencies[i].key] === undefined ||
                        (dependencies[i].type === 'string' || dependencies[i].type === 'array' ?
                            data[dependencies[i].key].length === 0
                            :
                            false)
                    )

        return response
    }, [data, dependencies])
}
