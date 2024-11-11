import React, { useState } from "react";

type dataType = {
    id: number;
    title: string;
}[];

interface TypeChildCompotnt {
    data: dataType;
    selectedId: number | null;
    handleSelected: (id: number) => void;
}

export default function App() {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    function handleSelected(id: number) {
        if (id) {
            setSelectedId(id);
        }
    }

    const data = [
        {
            id: 1,
            title: "react",
        },
        {
            id: 2,
            title: "javascirpt",
        },
        {
            id: 3,
            title: "vue js",
        },
    ];

    return (
        <div>
            <ChildComponent
                data={data}
                selectedId={selectedId}
                handleSelected={handleSelected}
            />
            {selectedId}
        </div>
    );
}

const ChildComponent: React.FC<TypeChildCompotnt> = (props) => {
    const { data, handleSelected, selectedId } = props;

    let findeTabs = data.find((item) => item.id === selectedId);

    return (
        <div className='flex gap-2'>
            <div>
                {data.map((i) => (
                    <div>
                        <button
                            className={`px-2 py-1 bg-blue-300 rounded-md`}
                            key={i.id}
                            onClick={() => handleSelected(i.id)}>
                            {i.title}
                        </button>
                    </div>
                ))}
                <Child_one>
                    {findeTabs?.id}
                    {findeTabs?.title}
                </Child_one>
            </div>
        </div>
    );
};

function Child_one({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>;
}
