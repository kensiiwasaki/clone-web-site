export default function Page() {
  return (
    <div className="flex justify-around">
      <section className="flex flex-col items-start gap-3 text-lg">
        <button className="px-2 py-1 rounded-full hover:bg-gray-200">X</button>
        <button className="px-2 py-1 rounded-full hover:bg-gray-200">
          ホーム
        </button>
        <button className="px-2 py-1 rounded-full hover:bg-gray-200">
          話題を検索
        </button>
        <button className="px-2 py-1 rounded-full hover:bg-gray-200">
          通知
        </button>
        <button className="px-2 py-1 rounded-full hover:bg-gray-200">
          メッセージ
        </button>
        <button className="px-2 py-1 rounded-full hover:bg-gray-200">
          リスト
        </button>
        <button className="px-2 py-1 rounded-full hover:bg-gray-200">
          ブックマーク
        </button>
        <button className="px-2 py-1 rounded-full hover:bg-gray-200">
          コミュニティ
        </button>
        <button className="px-2 py-1 rounded-full hover:bg-gray-200">
          プレミアム
        </button>
        <button className="px-2 py-1 rounded-full hover:bg-gray-200">
          プロフィール
        </button>
        <button className="px-2 py-1 rounded-full hover:bg-gray-200">
          もっと見る
        </button>
        <button className="px-2 py-1 rounded-full hover:bg-gray-200">
          ポストする
        </button>
      </section>

      <section>いもけん</section>

      <section>検索</section>
    </div>
  );
}
