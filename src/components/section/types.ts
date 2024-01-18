import Colors from "#theme/colors";

export default interface SectionProps {
    children: React.ReactNode;
    backgroundColor: keyof typeof Colors;
}
