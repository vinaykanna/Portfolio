function Header({ headerItems, fullName, designation }: any) {
  return (
    <header>
      <h1 className="text-4xl font-bold">{fullName}</h1>
      <h4 className="text-lg font-semibold">{designation}</h4>
      <div className="grid grid-cols-3 mt-6 gap-4">
        {headerItems.map((item: any, index: number) => (
          <div key={index} className="flex gap-1 items-center">
            {item.icon && <item.icon color="black" className="w-5" />}
            <span className="text-sm">
              {item.link ? (
                <a target="_blank" href={item.link}>
                  {item.title}
                </a>
              ) : (
                item.title
              )}
            </span>
          </div>
        ))}
      </div>
    </header>
  );
}

export default Header;
