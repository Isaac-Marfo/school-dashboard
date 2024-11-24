export function ContainerThatAllowsFlexItemsToScrollHorizontally({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    /**
     * the css overflow-x-scroll allow items in this
     * container to flex and scroll horizontally
     * 
     * no-scrollbar removes the default browser scrollbar
     * its a css class from the global css file
     * 
     * put the code below inside the global css file
     * 
     * .no-scrollbar::-webkit-scrollbar {
            display: none;
        }

        .no-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
        }

     */
    <div className="flex gap-4 justify-between overflow-x-scroll no-scrollbar">
      {children}
    </div>
  );
}

export function FlexItemsInCols({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex gap-4 flex-col overflow-y-scroll no-scrollbar">
      {children}
    </div>
  );
}
