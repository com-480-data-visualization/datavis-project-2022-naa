import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import presidents from './../data/presidents.json'
import PopupModal from './president_icon'

function PresidentsTimeline() {
    var icon_url = presidents.features[0].image
    return (<VerticalTimeline>
        <VerticalTimelineElement
            contentStyle={{ background: 'white'}}
            date=""
            iconStyle={{display:'false', width: '100px'}}
            icon={<PopupModal icon_url={icon_url}> </PopupModal>}
        >
        </VerticalTimelineElement>
        <VerticalTimelineElement
            contentStyle={{ background: 'rgb(33, 150, 243)'}}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2011 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)'}}
        ></VerticalTimelineElement>
        <VerticalTimelineElement
            contentStyle={{ background: 'rgb(33, 150, 243)'}}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2011 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        ></VerticalTimelineElement>
        <VerticalTimelineElement
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2011 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        ></VerticalTimelineElement>
        <VerticalTimelineElement
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2011 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        ></VerticalTimelineElement>
        <VerticalTimelineElement
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2011 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        ></VerticalTimelineElement>
        <VerticalTimelineElement
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2011 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        ></VerticalTimelineElement>
    </VerticalTimeline>)
}

export default PresidentsTimeline;
