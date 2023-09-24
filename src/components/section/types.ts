import Colors from "#theme/Colors";

export default interface SectionProps {
    children: React.ReactNode;
    backgroundColor: keyof typeof Colors;
}
