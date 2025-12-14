# Todo App

一個簡單的 Todo 應用程式，使用 React 和 Vite 建置。

## 功能

- 新增任務
- 標記任務為完成/未完成
- 編輯任務內容
- 刪除任務
- 現代化的 UI 設計

## 技術棧

- **前端框架**: React 19
- **建置工具**: Vite
- **程式語言**: JavaScript (ES6+)
- **樣式**: CSS3 (玻璃擬態效果、漸層、動畫)
- **圖標**: React Icons
- **開發工具**: ESLint

## 安裝

1. 複製專案：
   ```bash
   git clone <repository-url>
   cd react-practice
   ```

2. 安裝依賴：
   ```bash
   npm install
   ```

## 運行

啟動開發伺服器：
```bash
npm run dev
```

建置生產版本：
```bash
npm run build
```

預覽生產版本：
```bash
npm run preview
```

## 開發思考過程

### 專案起源
這個專案是根據用戶指定的檔案結構和邏輯約束來實現的 Todo 應用。用戶要求專案中必須存在且僅存在特定的檔案，並定義了每個元件的行為。

### 檔案結構設計
- **src/App.jsx**: 作為應用入口，負責載入全域 CSS 和渲染主要元件 TodoWrapper。不包含任何狀態或邏輯，保持簡潔。
- **src/components/TodoWrapper.jsx**: 核心元件，使用 useState 管理 todos 陣列。實作了五個關鍵函式：addTodo、deleteTodo、toggleCompleted、toggleIsEditing、editTodo。初始狀態包含兩筆範例資料。
- **src/components/Todo.jsx**: 根據任務狀態渲染不同模式（編輯或顯示）。使用 React Icons 提供編輯和刪除按鈕。
- **src/components/CreateForm.jsx**: 處理新增任務的表單，使用受控元件管理輸入。
- **src/components/EditForm.jsx**: 處理編輯任務的表單，初始狀態來自 props。

### 技術挑戰與解決
1. **狀態管理**: 使用 React Hooks (useState) 在 TodoWrapper 中集中管理狀態，透過 props 向下傳遞函式，避免元件間的緊耦合。
2. **唯一 ID 生成**: 使用 Math.random() 生成任務 ID，但為避免在 render 階段呼叫不純函式，使用函式初始化 useState。
3. **UI 設計**: 從基礎樣式開始，逐步改進為現代玻璃擬態設計。添加漸層背景、圓角、陰影和動畫效果，提升用戶體驗。
4. **依賴管理**: 安裝 react-icons 提供圖標，確保程式碼通過 ESLint 檢查。
5. **建置配置**: 利用 Vite 的快速開發體驗，配置 ESLint 確保程式碼品質。

### 設計原則
- **元件化**: 將功能拆分為小元件，提高可維護性。
- **單向資料流**: 狀態僅在頂層元件管理，向下傳遞。
- **響應式設計**: 使用 Flexbox 和相對單位適應不同螢幕。
- **用戶體驗**: 添加 hover 效果和過渡動畫，使互動更流暢。

### 學習與改進
透過這個專案，練習了 React 的核心概念如 Hooks、Props、事件處理。同時學習了現代 CSS 技術如 backdrop-filter 和 CSS Grid/Flexbox。未來可以考慮添加本地儲存、拖拽排序等功能。

## 檔案結構

```
src/
├── App.jsx          # 主應用元件
├── App.css          # 全域樣式
├── main.jsx         # 應用入口
└── components/
    ├── TodoWrapper.jsx  # 任務列表容器
    ├── Todo.jsx         # 單個任務元件
    ├── CreateForm.jsx   # 新增任務表單
    └── EditForm.jsx     # 編輯任務表單
```
