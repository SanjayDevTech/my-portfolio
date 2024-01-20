import BubbleUI from "react-bubble-ui";
import "react-bubble-ui/dist/index.css";
import * as Styles from "./styles";
import { useEffect, useRef } from "react";

function Child(props: {
    item: { icon: string, name: string },
}) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        ref.current!.ondragstart = () => false;
    }, []);

    return (
        <Styles.BubbleContent ref={ref} title={props.item.name}>
            <img draggable={false} src={props.item.icon} width={"100%"} alt={props.item.name} />
        </Styles.BubbleContent>
    );
}

export default function Bubble(props: {
    items: Array<{ icon: string, name: string }>,
    id: string,
}) {
    const options = {
        size: 150,
        minSize: 80,
        gutter: 8,
        provideProps: true,
        numCols: 4,
        fringeWidth: 45,
        yRadius: 100,
        xRadius: 200,
        cornerRadius: 50,
        compact: true,
        gravitation: 7
    };

    useEffect(() => {
        const dragspeed = 2;
        let isDown = false;
        let startX: number;
        let startY: number;
        let scrollLeft: number;
        let scrollTop: number;
        const bubbles: HTMLDivElement = document.querySelector(`.${props.id} > div._1Lxpd > div._2MD0k`)!;
        const onMouseDown = (e: MouseEvent) => {
            isDown = true;
            bubbles.classList.add("active");
            startX = e.pageX - bubbles.offsetLeft;
            startY = e.pageY - bubbles.offsetTop;
            scrollLeft = bubbles.scrollLeft;
            scrollTop = bubbles.scrollTop;
        };

        const onMouseLeave = () => {
            isDown = false;
            bubbles.classList.remove("active");
        }
        const onMouseUp = () => {
            isDown = false;
            bubbles.classList.remove("active");
        }
        const onMouseMove  = (e: MouseEvent) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - bubbles.offsetLeft;
            const y = e.pageY - bubbles.offsetTop;
            const walk = (x - startX) * dragspeed;
            const topwalk = (y - startY) * dragspeed;
            bubbles.scrollLeft = scrollLeft - walk;
            bubbles.scrollTop = scrollTop - topwalk;
        }
        bubbles.addEventListener("mousedown", onMouseDown);
        bubbles.addEventListener("mouseleave", onMouseLeave);
        bubbles.addEventListener("mouseup", onMouseUp);
        bubbles.addEventListener("mousemove", onMouseMove);

        return () => {
            bubbles.removeEventListener("mousedown", onMouseDown);
            bubbles.removeEventListener("mouseleave", onMouseLeave);
            bubbles.removeEventListener("mouseup", onMouseUp);
            bubbles.removeEventListener("mousemove", onMouseMove);
        }

    }, []);
    return (<BubbleUI style={{
        height: "100%",
        width: "100%",
        cursor: "grab",
    }} className={props.id} options={options}>
        {props.items.map(item => <Child item={item} key={item.name} />)}
    </BubbleUI>)
}
