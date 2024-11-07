import React, {
    forwardRef,
    MutableRefObject,
    useImperativeHandle,
    useRef,
    useState,
} from "react";

interface TypeChildCompotnt {
    data: {
        id: number;
        title: string;
    }[];
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
    const { data, handleSelected } = props;

    return (
        <div className='flex gap-2'>
            {data.map((i) => (
                <button
                    className={`px-2 py-1 bg-blue-300 rounded-md`}
                    key={i.id}
                    onClick={() => handleSelected(i.id)}>
                    {i.title}
                </button>
            ))}
        </div>
    );
};
