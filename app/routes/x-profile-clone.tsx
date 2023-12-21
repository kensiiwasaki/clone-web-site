export default function Page() {
  return (
    <div className="flex justify-center gap-6">
      <section className="flex flex-col items-start gap-3 text-lg">
        <button className="px-3 py-1 text-2xl rounded-full hover:bg-gray-200">
          X
        </button>
        <button className="px-3 py-2 rounded-full hover:bg-gray-200">
          ホーム
        </button>
        <button className="px-3 py-2 rounded-full hover:bg-gray-200">
          話題を検索
        </button>
        <button className="px-3 py-2 rounded-full hover:bg-gray-200">
          通知
        </button>
        <button className="px-3 py-2 rounded-full hover:bg-gray-200">
          メッセージ
        </button>
        <button className="px-3 py-2 rounded-full hover:bg-gray-200">
          リスト
        </button>
        <button className="px-3 py-2 rounded-full hover:bg-gray-200">
          ブックマーク
        </button>
        <button className="px-3 py-2 rounded-full hover:bg-gray-200">
          コミュニティ
        </button>
        <button className="px-3 py-2 rounded-full hover:bg-gray-200">
          プレミアム
        </button>
        <button className="px-3 py-2 rounded-full hover:bg-gray-200">
          プロフィール
        </button>
        <button className="px-3 py-2 rounded-full hover:bg-gray-200">
          もっと見る
        </button>
        <div className="mt-3 bg-blue-400 font-bold w-full text-center text-sm text-white rounded-full hover:bg-blue-500">
          <button className="py-3">ポストする</button>
        </div>
      </section>

      <section className="w-[650px]">
        <div className="flex">
          <button>←</button>
          <h2>いもけん</h2>
          <p>523 件のポスト</p>
        </div>
      </section>

      <section>検索</section>
    </div>
  );
}
