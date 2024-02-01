import ShowcaseProps from "./types";
import * as Styles from "./styles";

export default function Showcase(props: ShowcaseProps) {
    return (<Styles.Wrapper>
        {props.items.map(item => <Styles.ItemWrapper title={item.name}>
            <img src={item.icon} alt={item.name} width="64" height="64" />
            <span>{item.name}</span>
        </Styles.ItemWrapper>)}
    </Styles.Wrapper>);
}
