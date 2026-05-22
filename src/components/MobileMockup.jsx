export default function MobileMockup({ url }) {
  if (!url) return null

  return (
    <div className="flex justify-center items-center py-10 bg-transparent">
      <div className="relative mx-auto border-gray-800 dark:border-gray-700 bg-gray-800 border-[14px] rounded-[2.5rem] h-[640px] w-[320px] shadow-xl">
        <div className="w-[148px] h-[18px] bg-gray-800 top-0 left-1/2 -translate-x-1/2 rounded-b-[1rem] absolute z-20" />
        <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg" />
        <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg" />
        <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg" />
        <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white dark:bg-gray-900">
          <iframe
            src={url}
            className="w-full h-full border-none"
            title="Mobile App Demo"
          />
        </div>
      </div>
    </div>
  )
}

