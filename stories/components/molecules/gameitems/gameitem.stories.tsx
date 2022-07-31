import {Meta} from "@storybook/react"
import GameItem, { GameItemProps } from '../../../../components/molecules/GameItem'

export default {
    title: 'component/molecules/GameItem',
    component: GameItem
} as Meta

const Template = (args: GameItemProps) => <GameItem {...args}/>;

export const Default = Template.bind({
});

Default.args = {
    title: 'Super Mechas',
    category: 'Mobile', 
    thumbnail: '/img/Thumbnail-1.png'

};