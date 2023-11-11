import { ICardProps } from "./types";

import * as Styles from "./styles";

function Card(props: ICardProps) {
	const { img, title } = props;
	return (
		<Styles.Wrapper>
			<Styles.Content>
				<Styles.Banner src={img} alt={title} />
				<Styles.Overlay />
				<Styles.Title>{title}</Styles.Title>
			</Styles.Content>
		</Styles.Wrapper>
	);
}

export default Card;
