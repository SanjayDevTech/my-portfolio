import { useContext } from 'react';
import SectionContext from '../context/SectionContext';

export default function useSection() {
	return useContext(SectionContext);
}
