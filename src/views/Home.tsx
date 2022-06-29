import React from 'react'
import { Card, Col, Row } from 'antd'
import './Home.scss'

export default function Home() {
    return (
        <div className="Home">
            <Row gutter={16}>
                <Col span={6}>
                    <Card title="正则匹配(Regex)" bordered={false}>
                        <div><a href="https://rubular.com" target="_blank" title="Ruby rubular">rubular for Ruby</a></div>
                        <div><a href="https://regexr.com/" target="_blank" title="regexr">regexr for Javascript</a></div>
                        <div><a href="https://regex101.com/" target="_blank" title="regex101">regex101</a></div>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="数据比较(Data Diff)" bordered={false}>
                        <div><a href="https://www.diffchecker.com" target="_blank" title="diffchecker">Text Diff(diffchecker)</a></div>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="数据加密解密" bordered={false}>
                        <div><a href="https://tool.oschina.net/encrypt" target="_blank" title="oschina">Crypto-JS实现</a></div>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="JSON工具" bordered={false}>
                        <div><a href="http://jsoneditoronline.org/" target="_blank" title="json editor">Json Editor</a></div>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="在线绘图" bordered={false}>
                        <div><a href="https://www.processon.com/" target="_blank" title="ProcessOn diagrams">ProcessOn</a></div>
                        <div>
                            <a href="https://app.diagrams.net/" target="_blank" title="diagrams">drawio</a>
                            (包含<a href="https://github.com/jgraph/drawio-desktop/releases" target="_blank">客户端</a>)
                        </div>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="其他" bordered={false}>
                        <div><a href="https://crontab.guru/" target="_blank" title="crontab">Crontab(分时日月周)</a></div>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}