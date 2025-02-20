import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';
// import App from './app/app';
import DashboardPage from './pages/DashboardPage';
import { ConfigProvider } from 'antd';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <BrowserRouter>
      <ConfigProvider
        theme={{
          token: {},
          components: {
            Layout: {
              headerBg: '#F7F9F8',
              headerHeight: 52,
              headerPadding: 0,
              bodyBg: '#ffffff',
              siderBg: '#F7F9F8',
              lightSiderBg: '#F7F9F8',
            },
            Switch: {
              trackHeight: 30,
              handleSize: 22,
              trackPadding: 4,
              innerMaxMargin: 30,
            },
            Breadcrumb: {},
            Table: {
              headerBg: '#F1F4F3',
              rowSelectedBg: '#eeeaf8',
              rowSelectedHoverBg: '#eeeaf8',
              cellPaddingBlock: 1,
              borderColor: '#DDE0DF',
              cellFontSize: 13,
              cellPaddingInline: 6,
              headerBorderRadius: 0,
              selectionColumnWidth: 12,
              cellPaddingBlockSM: 6,
            },
            Menu: {
              itemHeight: 34,
              subMenuItemSelectedColor: '#1F7795',
              itemSelectedBg: '#6E706F',
              itemSelectedColor: '#FFFFFF',
              colorBgBase: '#F7F9F8',
              itemBorderRadius: 0,
              itemMarginInline: 0,
              itemMarginBlock: 0,
              paddingContentHorizontal: 14,
            },
            Input: {
              borderRadius: 2,
              hoverBorderColor: '#B9BCBB',
              activeBorderColor: '#B9BCBB',
              controlHeight: 32,
              colorTextPlaceholder: '#A4A6A5',
            },
            Select: {
              borderRadius: 2,
              hoverBorderColor: '#B9BCBB',
              activeBorderColor: '#B9BCBB',
              controlHeight: 32,
            },
            Form: {
              labelRequiredMarkColor: '#FF4D4F',
            },
            Button: {
              controlHeight: 32,
              borderRadius: 2,
              colorPrimary: '#3C3E3D',
              colorPrimaryBgHover: '#3C3E3D',
              colorPrimaryBg: '#3C3E3D',
              colorPrimaryHover: '#5B5C5B',
              primaryShadow: '0 2px 0 #3c3e3d1a',
            },
            Tabs: {
              inkBarColor: '#2D9BB2',
              horizontalItemGutter: 0,
            },
            Checkbox: {
              colorPrimary: '#554596',
              colorPrimaryHover: '#554596',
              borderRadiusSM: 1,
            },
          },
        }}
      >
        {/* <App /> */}
        <DashboardPage />
      </ConfigProvider>
    </BrowserRouter>
  </StrictMode>
);
