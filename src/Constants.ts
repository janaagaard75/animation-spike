export class Constants {
  public static readonly columns = 10
  public static readonly fieldSize = 300
  public static readonly numberOfSquares = 50

  public static readonly rows = Constants.columns
  public static readonly squareSize = Math.floor(
    (Constants.fieldSize / Constants.columns) * 0.7
  )
}
